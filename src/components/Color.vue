<template>
  <div class="container" :style="`background-color:rgb(${color.R},${color.G},${color.B});`">
    <div class="control-box">
      <div class="slide-box">
        <div class="label r">R</div>
        <el-slider
          class="r"
          v-model="color.R"
          vertical
          size="large"
          :max="max"
          :min="min"
          height="180px"
        />
        <div class="num-box r">{{ color.R }}</div>
      </div>
      <div class="slide-box">
        <div class="label g">G</div>
        <el-slider
          class="g"
          v-model="color.G"
          vertical
          size="large"
          :max="max"
          :min="min"
          height="180px"
        />
        <div class="num-box g">{{ color.G }}</div>
      </div>
      <div class="slide-box">
        <div class="label b">B</div>
        <el-slider
          class="b"
          v-model="color.B"
          vertical
          size="large"
          :max="max"
          :min="min"
          height="180px"
        />
        <div class="num-box b">{{ color.B }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'color'
}
</script>

<script setup>
import { reactive } from 'vue'

const max = 255
const min = 0

const color = reactive({
  R: 0,
  G: 0,
  B: 0
})

</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .control-box {
    width: 300px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;

    .slide-box {
      height: 100%;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .label {
        font-weight: 600;
        &.r {
          color: red;
        }
        &.g {
          color: green;
        }
        &.b {
          color: blue;
        }
      }

      .num-box {
        width: 100%;
        height: 20px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        &.r {
          background-color: red;
        }
        &.g {
          background-color: green;
        }
        &.b {
          background-color: blue;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.el-slider {
  &.r {
    .el-slider__bar {
      background-color: red;
    }
    .el-slider__button {
      border-color: red;
    }
  }
  &.g {
    .el-slider__bar {
      background-color: green;
    }
    .el-slider__button {
      border-color: green;
    }
  }
  &.b {
    .el-slider__bar {
      background-color: blue;
    }
    .el-slider__button {
      border-color: blue;
    }
  }
}
</style>