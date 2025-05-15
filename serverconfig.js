const account = new PasskeyServer({
    rpcUrl: env.PUBLIC_rpcUrl,
    launchtubeUrl: env.PUBLIC_launchtubeUrl,
    launchtubeJwt: env.PRIVATE_launchtubeJwt,
    mercuryUrl: env.PUBLIC_mercuryUrl,
    mercuryJwt: env.PRIVATE_mercuryJwt,
});
/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        'passkey-kit', 
        'passkey-factory-sdk', 
        'passkey-kit-sdk',
        'sac-sdk',
    ]
};

export default nextConfig;