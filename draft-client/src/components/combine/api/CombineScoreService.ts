import apiClient from '@/utils/axios';
import CombineScore from '@/domain/interfaces/domainInterfaces';

export const getCombineScores = () => {
  return apiClient.get<CombineScore[]>('/combineScores');
};

export const createCombineScore = (combineScore: CombineScore) => {
  return apiClient.post('/combines', combineScore);
};

export const getCombineScore = (id: number) => {
  return apiClient.get<CombineScore>(`/combine/${id}`);
};
