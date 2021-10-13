import { generateApiClient } from 'app/utils/apiUtils';

const configApi = generateApiClient('configApi');

export const getJobs = id => configApi.get(`worker/${id}/matches`);

export const getProfile = id => configApi.get(`worker/${id}/profile`);

export const acceptJob = ({ jobId, workerId }) =>
  configApi.get(`worker/${workerId}/job/${jobId}/accept`);

export const rejectJob = ({ jobId, workerId }) =>
  configApi.get(`worker/${workerId}/job/${jobId}/reject`);
