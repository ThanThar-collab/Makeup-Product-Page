import { create } from 'zustand';

export const useLoginFormStore = create((set) => ({
  userName: [],
  setUserName: (userName) => set({ userName }),

  emplyoee: 'Kyaw Kyaw',
  setEmployee: (emplyoee) => set({ emplyoee }),

  userToken: '636fc0ea5cd56df68373142d33b80b5e97bb749cffddbdde1e623a3e95c7781f',
  setUserToken: (userToken) => set({ userToken })
}));

export const useLoginFormStoreList = create((set) => ({
  userNameList: [],
  setUserNameList: (userNameList) => set({ userNameList })
}));