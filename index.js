import { QVAC } from '@qvac/sdk';

console.log("🔄 Loading model...");
const qvac = await QVAC.loadModel();

console.log("✅ Ready!");
const sagot = await qvac.completion({
  prompt: "Ano ang QVAC? Ipaliwanag sa Tagalog.",
  maxTokens: 100
});

console.log("\n💬 Sagot:");
console.log(sagot.text);
