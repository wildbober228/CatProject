import * as CatActionCreators from './cat'
import * as FavoriteActionCreators from './favorite'

export default  {
        ...CatActionCreators,
        ...FavoriteActionCreators
}
