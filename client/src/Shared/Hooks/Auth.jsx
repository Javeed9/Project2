import { create } from 'zustand'

const useAuth = create( (set) => ({
    isAdmin : false,
    setIsAdmin: () => set( (state) => ({ isAdmin: !state.isAdmin }) ),

}))

export default useAuth;