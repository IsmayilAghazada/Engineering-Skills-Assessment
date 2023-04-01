const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const MAX_PARTITION_KEY_LENGTH = 256;
  const ALGO = 'sha3-512';
  const TRIVIAL_PARTITION_KEY = '0';

  if (!event) return TRIVIAL_PARTITION_KEY;

  const partitionKey = event.partitionKey || crypto.createHash(ALGO).update(JSON.stringify(event)).digest('hex');
  const candidate = typeof partitionKey === 'string' ? partitionKey : JSON.stringify(partitionKey);

  return candidate.length <= MAX_PARTITION_KEY_LENGTH ? candidate : crypto.createHash(ALGO).update(candidate).digest('hex');
};