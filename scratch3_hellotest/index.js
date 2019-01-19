class Scratch3Hellotest {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'hellotest',
            name: 'Hellotest',
            blocks: [
                {
                    opcode: 'hello',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'hello'
                }
            ]
        }
    }

    hello() {
        console.log('hello');
    }
}

Scratch.extensions.register(new Scratch3Hellotest());
