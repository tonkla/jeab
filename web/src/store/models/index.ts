import { persist } from 'easy-peasy'
import userState, { UserStateModel } from './user'

export interface StoreModel {
  userState: UserStateModel
}

const storeModel: StoreModel = persist(
  { userState },
  {
    storage: 'localStorage',
    allow: ['userState'],
  }
)

export default storeModel
