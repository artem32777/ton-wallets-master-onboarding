import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { FirstContract } from '../wrappers/FirstContract';
import '@ton/test-utils';

describe('FirstContract', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let firstContract: SandboxContract<FirstContract>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        firstContract = blockchain.openContract(await FirstContract.fromInit(6541224545410n));

        deployer = await blockchain.treasury('deployer');

        const deployResult = await firstContract.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            },
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: firstContract.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and firstContract are ready to use
    });

    it('should increase counter with amount', async () => {
        const counterBefore = await firstContract.getCounter();
        console.log('counterBefore', counterBefore);

        await firstContract.send(
            deployer.getSender(),
            {
                value: toNano('0.02'),
            },
            {
                $$type: "Add",
                amount: 5n,
            }
        );

        const counterAfter = await firstContract.getCounter();
        console.log('counterAfter', counterAfter);

        expect(counterBefore).toBeLessThan(counterAfter)

    });
});
