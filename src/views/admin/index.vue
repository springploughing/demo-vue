<template>
  <a-config-provider :locale="locale">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider collapsible v-model="collapsed">
        <div class="logo" />
        <a-menu theme="dark" :defaultSelectedKeys="['1']" @click="onMenuChange" mode="inline">
          <a-menu-item key="1">
            <a-icon type="pie-chart" />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="desktop" />
            <span>Option 2</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="user" />
              <span>User</span>
            </span>
            <a-menu-item key="3">Tom</a-menu-item>
            <a-menu-item key="4">Bill</a-menu-item>
            <a-menu-item key="5">Alex</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">
              <a-icon type="team" />
              <span>Team</span>
            </span>
            <a-menu-item key="6">Team 1</a-menu-item>
            <a-menu-item key="8">Team 2</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="9">
            <a-icon type="file" />
            <span>File</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0 16px; text-align: right;">
          <a-dropdown placement="bottomCenter">
            <a-button>{{$t('language')}}</a-button>
            <a-menu slot="overlay">
              <a-menu-item>
                <div class="lang-item" @click="changeLanguage('zh-cn')">简体中文</div>
              </a-menu-item>
              <a-menu-item>
                <div class="lang-item" @click="changeLanguage('en-us')">English</div>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <HelloWorld :msg="$t('hint')" :hint="$t('hint')"></HelloWorld>
            <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
              <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
            </div>
            <div>test44</div>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
export default {
  name: "Admin",
  components: {
    HelloWorld
  },
  data() {
    return {
      langVisible: false,
      collapsed: false,
      locale: zhCN
    };
  },
  methods: {
    // 语言切换
    changeLanguage(lang) {
      lang === "" ? "zh-cn" : lang;
      this.$i18n.locale = lang;
      this.locale = lang === "zh-cn" ? zhCN : null;
    },
    onPanelChange(value, mode) {
      window.console.log(value, mode);
    },
    onMenuChange(item, key, keyPath) {
      window.console.log(item, key, keyPath);
      this.$router.push("/test");
    }
  }
};
</script>


<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>