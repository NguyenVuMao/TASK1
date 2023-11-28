<template>
    <div>
      <div>
        <label>Họ và tên: </label>
        <input v-model="updatedData.name" />
      </div>
      <div>
        <label>Tuổi: </label>
        <input v-model="updatedData.age" />
      </div>
      <div>
        <label>Mã số sinh viên: </label>
        <input v-model="updatedData.idIndentity" />
      </div>
      <!-- <button @click="updateData">UPDATE</button> -->
    </div>
  </template>
  
  <script setup>

  </script>