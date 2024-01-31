import { MerkleDistributor } from './src';
import { IDL } from './src/types/merkle_distributor';
import {
  deriveClaimStatus,
  getOrCreateATAInstruction,
  MERKLE_DISTRIBUTOR_PROGRAM_ID,
} from './src/utils';

export default MerkleDistributor;

export {
  deriveClaimStatus,
  getOrCreateATAInstruction,
  IDL,
  MERKLE_DISTRIBUTOR_PROGRAM_ID,
};

export type { UserResponse } from './src/index';
export type { MerkleDistributorIDL } from './src/types/merkle_distributor';
export { MerkleDistributor } from './src/index';