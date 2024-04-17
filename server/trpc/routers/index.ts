import { router } from '../trpc'
import { todoRouter } from './todo'
import { userRouter } from './user'

export const appRouter = router({
  todo: todoRouter,
  user: userRouter
})


// export type definition of API
export type AppRouter = typeof appRouter


