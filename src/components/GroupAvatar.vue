<template>
  <div class="group__avatar">
    <Avatar
      v-for="(avatar, index) in avatars"
      :key="index"
      :src="avatar"
      v-if="index < parseInt(max)"
      :last="index + 1 == parseInt(max)"
      :more_avatars="avatars.length == max ? 0 : parseInt(max)"
    ></Avatar>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
  name: "GroupAvatar",
  components: {
    Avatar,
  },
  props: {
    max: {
      type: Number,
      default: 5,
    },
    avatars: {
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped>
.group__avatar {
  display: inline-flex;
  margin-left: 15px;
  .__avatar {
    margin-left: -15px;
  }
}
</style>