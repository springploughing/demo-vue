<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>
        <el-popover
          ref="popover-lang"
          placement="bottom-start"
          trigger="click"
          v-model="langVisible"
        >
          <el-button slot="reference">{{$t('language')}}</el-button>
          <div class="lang-item" @click="changeLanguage('zh')">简体中文</div>
          <div class="lang-item" @click="changeLanguage('en')">English</div>
        </el-popover>
      </el-header>
      <el-main>
        <HelloWorld msg="Welcome to Your Vue.js App" hint="This is hint!"></HelloWorld>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Admin",
  components: {
    HelloWorld
  },
  data() {
    return {
      langVisible: false
    };
  },
  methods: {
    // 语言切换
    changeLanguage(lang) {
      lang === "" ? "zh" : lang;
      localStorage.setItem("locale", lang);
      this.$i18n.locale = lang;
      this.langVisible = false;
    }
  }
};
</script>


<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>