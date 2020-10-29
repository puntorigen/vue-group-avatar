## Vue group avatar

A minimalist component to display a group of avatars in your application 👀🎉
![](https://firebasestorage.googleapis.com/v0/b/social-network-f764f.appspot.com/o/localhost_8080_npm%20copia.png?alt=media&token=2d1dad63-ae19-4d41-8838-9c8662a83023)

### Install
``` bash
npm install vue-group-avatar

# or
yarn add vue-group-avatar
```

### Local Registration

``` bash
import "vue-group-avatar/dist/vue-group-avatar.css"
import { GroupAvatar } from "vue-group-avatar";

export default {
  components: {
    GroupAvatar,
  }
}
```

### Component

``` bash
<template>
    <GroupAvatar :avatars="avatar" :max="max"></GroupAvatar>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
	  	max:  2,
        avatars: [
          {img: "@/assets/img/img1.png"},
          {img: "@/assets/img/img2.png"},
          {img: "@/assets/img/img3.png"},
          {img: "@/assets/img/img4.png"}
        ]
      }
    }
  }
</script>
```

### GroupAvatar component API
| Prop | Type | Description |
| --- | --- | --- |
| avatars | Array | To be an array with a specific object called " |
| max | Number | Maximum number of avatarts displayed... " |

### License

[MIT]