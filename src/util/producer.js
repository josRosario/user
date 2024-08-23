import { Kafka } from "kafkajs";

export const produce  = async () => {
    const kaf = new Kafka({
        clientId:'my-user-app',
        brokers: ['address']
    })

    const producer = kaf.producer();
    console.log('here will go the call')
}