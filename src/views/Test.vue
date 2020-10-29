<template>
  <div class="about">
    <GroupAvatar :avatars="avatar" :max="max"></GroupAvatar>
  </div>
</template>

<script>
import GroupAvatar from "@/components/GroupAvatar";
export default {
  components: {
    GroupAvatar,
  },
  data() {
    return {
      max: 5,
      avatar: [
        {
          img:
            "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80",
        },
        {
          img:
            "https://images.unsplash.com/photo-1520283818086-3f6dffb019c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        },
        {
          img:
            "https://images.unsplash.com/photo-1542384701-c0e46e0eda04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=336&q=80",
        },
        {
          img:
            "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        },
        {
          img:
            "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80",
        },
        {
          img:
            "https://images.unsplash.com/photo-1520283818086-3f6dffb019c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        },
        {
          img:
            "https://images.unsplash.com/photo-1542384701-c0e46e0eda04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=336&q=80",
        },
        {
          img:
            "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        },
      ],
    };
  },
};
</script>
