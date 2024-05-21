export const publishToKafka = async (topic, msg): Promise<void> => {
  const msgStr = JSON.stringify(msg);
  console.log(`Publishing to Kafka topic: ${topic}, message: ${msgStr}`);
}

