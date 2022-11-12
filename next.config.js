/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    env: {
        // MNEMONIC: process.env.MNEMONIC, as to not expose to client side
        GOERLI_URL: process.env.GOERLI_URL,
        DEPLOYED_ADDRESS: process.env.DEPLOYED_ADDRESS
    },
    reactStrictMode: true,
}

module.exports = nextConfig