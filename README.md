## Vue group avatar

A minimalist component to display a group of avatars in your application 👀🎉
![](https://firebasestorage.googleapis.com/v0/b/josueayala27-49da6.appspot.com/o/localhost_8080_npm%20copia.png?alt=media&token=349146fd-0b29-4868-afc1-1ec3cd8bc152)

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
    <GroupAvatar borderColor="#0092FF" :avatars="avatars" :max="max"></GroupAvatar>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        max:  2,
        avatars: [
          "@/assets/img/img1.png", 
          "@/assets/img/img2.png", 
          "@/assets/img/img3.png", 
          "@/assets/img/img4.png"
          ]
      }
    }
  }
</script>
```

### GroupAvatar component API
| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| avatars | Array | null | You must have an array with the routes of all your photographs, so that they can be displayed |
| max | Number | 5 | Maximum number of avatarts displayed |
| borderColor | String | #FFFFFF | You can change the color of the borders using __hexadecimal__ codes for the colors |

### License

MIT
