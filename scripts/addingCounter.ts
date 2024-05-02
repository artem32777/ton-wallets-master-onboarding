import { toNano } from '@ton/core';
import { FirstContract } from '../wrappers/FirstContract';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const firstContract = provider.open(await FirstContract.fromInit(6789543n));

    await firstContract.send(
        provider.sender(),
        {
            value: toNano('0.01'),
        },
        {
            $$type: 'Add',
            amount: 5n,
        },
    );
}
