# vue2-demo

```
1、组件间通信
2、store多种方式使用

npm i vuex-persistedstate 数据持久化
```

```js
import { mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  ...
  computed:{
  	...mapState(['useInfo']),
  	//以下是带命名空间的
  	//...mapState('user',['useInfo']),
  	//...mapState({
	//  userInfo: (sate) => state.user.userInfo
	//}),
  	...mapGetters(['getUserInfo']),
  	//以下是带命名空间的
  	//...mapGetters(['getUserInfo'])
  	//...mapGetters({
	//   userInfo: "user/getUserInfo"
	//})
  },
  methods:{
    ...mapActions(['setUserInfo']),
    //以下是带命名空间的
    //...mapActions({
	//  setUserInfo: 'user/setUserInfo'
    //})
    ...mapActions(['setUserInfo']),
    //以下是带命名空间的
    //...mapMutations({
	//  setUserInfo: 'user/setUserInfo'
    //})
  }
  ...
}
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
