# vue3-demo

- 验证码输入框
- 拖拽排序
- 滚动
- 组件通信

```js
新的vuex语法糖用法
重点看bind方法的作用，就可以把相关的语法糖绑定，最终返回一个动态的Ref或者Reactive，相关资料自行查阅

import { computed, defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore, mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default defineComponent({
  ...
  setup() {
    const route = useRoute();
    onMounted(() => {
      console.log(route.fullPath);
    });
    const store = useStore();
    const isLoading = computed(
      mapGetters(['getLoading']).getLoading.bind({ $store: store })
    );
    // 带命名空间 其他雷同
    const isLoading = computed(
      mapGetters('user',['getLoading']).getLoading.bind({ $store: store })
    );
    // const netError = computed(
    //   mapGetters(['getNetError']).getNetError.bind({ $store: store })
    // );
    const netError = computed(
      mapState(['netError']).netError.bind({ $store: store })
    );
    console.log(netError);
    // const setLoading = mapActions(['setLoading']).setLoading.bind({
    //   $store: store
    // });
    const setLoading = mapMutations(['setLoading']).setLoading.bind({
      $store: store
    });
    const freshPage = () => {
      setLoading(true);
      //window.location.reload();
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    return {
      route,
      isLoading,
      netError,
      freshPage
    };
  }
  ...
})

import { mapState, mapGetters} from 'vuex'
export default defineComponent({
  ...
  computed: mapGetters(['getUserInfo'])
  //或者也可以使用老的办法
  //computed: {
  // ...mapGetters(['getUserInfo'])
  //带命名空间
  // ...mapGetters({
  //   userInfo: "user/getUserInfo"
  // })
  //}
  ...
})
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
