{
  description = "Development shell for shodohq.github.io";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs =
    { nixpkgs, ... }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];

      forEachSystem = nixpkgs.lib.genAttrs systems;
    in
    {
      devShells = forEachSystem (
        system:
        let
          pkgs = import nixpkgs { inherit system; };
          shellHook = ''
            export NEXT_TELEMETRY_DISABLED=1
            export npm_config_update_notifier=false
            export PATH="$PWD/node_modules/.bin:$PATH"

            echo "Node $(node --version)"
            echo "npm $(npm --version)"
            echo "Run: npm ci && npm run dev"
          '';
          linuxFhsEnv = pkgs.buildFHSEnv {
            name = "shodohq-fhs";
            targetPkgs =
              pkgs: with pkgs; [
                git
                nodejs_22
                openssl
                stdenv.cc.cc
                zlib
              ];
            runScript = "bash";
            profile = ''
              export NEXT_TELEMETRY_DISABLED=1
              export npm_config_update_notifier=false
              export PATH="$PWD/node_modules/.bin:${pkgs.nodejs_22}/bin:${pkgs.git}/bin:$PATH"
            '';
          };
          linuxFhsCommand =
            name: executable:
            pkgs.writeShellScriptBin name ''
              exec ${linuxFhsEnv}/bin/shodohq-fhs -c 'exec "$@"' ${name} ${executable} "$@"
            '';
          nodePackages =
            if pkgs.stdenv.hostPlatform.isLinux then
              [
                (linuxFhsCommand "node" "${pkgs.nodejs_22}/bin/node")
                (linuxFhsCommand "npm" "${pkgs.nodejs_22}/bin/npm")
                (linuxFhsCommand "npx" "${pkgs.nodejs_22}/bin/npx")
              ]
            else
              [
                pkgs.nodejs_22
              ];
        in
        {
          default = pkgs.mkShell {
            packages = [ pkgs.git ] ++ nodePackages;

            inherit shellHook;
          };
        }
      );
    };
}
