const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partitionKey when it is a string", () => {
    const eventData = { partitionKey: "test-partitionKey" };
    const result = deterministicPartitionKey(eventData);
    expect(result).toEqual(eventData.partitionKey);
  });

  it("Hashes the event argument data when the partitionKey item doesn't exist in it", () => {
    const eventData = { id: 1, name: "Ismayil", surname: "Aghazada" };
    const expected = crypto.createHash("sha3-512").update(JSON.stringify(eventData)).digest("hex")
    const result = deterministicPartitionKey(eventData);
    expect(result).toEqual(expected);
  });

  it("Stringifies the candidate when the partitionKey is not a string", () => {
    const eventData = { partitionKey: { id: 1, name: "Ismayil", surname: "Aghazada" } };
    const expected = JSON.stringify(eventData.partitionKey);
    const result = deterministicPartitionKey(eventData);
    expect(result).toEqual(expected);
  });

  it("Hashes the partitionKey when its length is longer than MAX_PARTITION_KEY_LENGTH(256 symbols)", () => {
    const eventData = { partitionKey: "test".repeat(65) };
    const expected = crypto.createHash("sha3-512").update(eventData.partitionKey).digest("hex")
    const result = deterministicPartitionKey(eventData);
    expect(result).toEqual(expected);
  });
});
