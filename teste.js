import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true });

class Atendimento {
    constructor() {
        this.filaCliente = ["João", "Maria", "Pedro"];
    }

    saudarCliente(nome) {
        console.log(`Olá, ${nome}! Seja bem-vindo ao nosso atendimento! 😁`);
    }


    atenderCliente() {
        if (this.filaCliente.length === 0) {
            console.log("Nenhum cliente na fila.");
            return;
        }

        let clienteAtendido = this.filaCliente.pop();
        this.saudarCliente(clienteAtendido);
    }
}

const sistema = new Atendimento();

sistema.atenderCliente();
sistema.atenderCliente();
sistema.atenderCliente();
sistema.atenderCliente();
