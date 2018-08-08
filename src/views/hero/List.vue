<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">添加</a> -->
        <router-link class="btn btn-success" to="/hero/add">添加</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>英雄名称</th>
                <th>英雄性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in list" :key="item.id">
                <td>{{ index+1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.gender }}</td>
                <td>
                  <!-- <a href="edit.html">edit</a> -->
                  <router-link :to="'/hero/edit/'+item.id">edit</router-link>
                  &nbsp;&nbsp;
                  <a @click.prevent="handelDel(item.id)" href="javascript:void(0)">delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios
        .get("http://localhost:3000/heroes")
        .then(response => {
          if (response.status === 200) {
            this.list = response.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handelDel(id) {
      if (!confirm("Are you sure")) {
        return;
      }
      axios
        .delete(`http://localhost:3000/heroes/${id}`)
        .then(response => {
          if (response.status === 200) {
            this.loadData();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
