// src/services/icpService.js
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as TraffixCanister_idl, canisterId as TraffixCanister_id } from 'declarations/TraffixCanister';

// Create an agent to communicate with the ICP canister
const agent = new HttpAgent();
const canisterActor = Actor.createActor(TraffixCanister_idl, {
  agent,
  canisterId: TraffixCanister_id,
});

// Function to submit a report to the canister
export async function submitReportToICP(report) {
  try {
    const result = await canisterActor.addReport(report);
    console.log('Report submitted to ICP:', result);
    return result;
  } catch (error) {
    console.error('Error submitting report to ICP:', error);
  }
}
