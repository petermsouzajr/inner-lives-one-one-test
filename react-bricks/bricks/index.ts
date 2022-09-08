import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'
import HeroUnit from './MyHeroUnit'
import LoginModule from './LoginModule'

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  HeroUnit, // Example custom brick
  LoginModule,
  // Put here your other bricks...
]

export default bricks
