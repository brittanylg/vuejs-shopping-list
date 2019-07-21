<template>
  <v-app dark>
    <v-toolbar app color="primary" absolute>
      <v-toolbar-title>Shopping List App</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout row my-4>
          <v-flex xs12 sm8 md6 lg4 offset-sm2 offset-md3 offset-lg4>
            <v-card light>
              <v-toolbar color="primary" dark>
                <v-toolbar-title>Add Items</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-text-field label="enter item" v-model="newItem" :rules="rules" counter="20" clearable solo @keyup.enter="addItem"></v-text-field>
                <v-btn color="secondary" :disabled="isDisabled" @click="addItem">add item</v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row my-4>
          <v-flex xs12 sm8 md6 lg4 offset-sm2 offset-md3 offset-lg4>
            <v-card light>
              <v-toolbar color="primary" dark>
                <v-toolbar-title>Shopping List</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn depressed color="secondary" @click="">Export to CSV</v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text>
                <v-list>
                  <v-list-tile v-if="list.length === 0">
                    <v-list-tile-content>
                      <v-list-tile-title>You do not have any items in your shopping cart.</v-list-tile-title>
                      <v-list-tile-sub-title>Use the form above to start adding items.</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile v-for="item in list" :key="item.name">
                    <v-list-tile-content>
                      <v-list-tile-title :class="[item.purchased ? 'purchased text-muted' : '']" v-text="item.name"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-btn v-if="item.edit" flat icon color="info" disabled @click="editItem(item)">
                        <v-icon>edit</v-icon>
                      </v-btn>
                    </v-list-tile-action>
                    <v-list-tile-action>
                      <v-btn flat icon v-if="item.purchased" color="secondary" @click="togglePurchased(item)">
                        <v-icon>check</v-icon>
                      </v-btn>
                      <v-btn flat icon v-else color="infoLight" @click="togglePurchased(item)">
                        <v-icon>check</v-icon>
                      </v-btn>
                    </v-list-tile-action>
                    <v-list-tile-action>
                      <v-btn flat icon color="error" @click="removeItem(item)">
                        <v-icon>delete</v-icon>
                      </v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      newItem: '',
      rules: [v => v.length <= 20 || 'Max 20 characters'],
      list: [
        {
          name: 'purchased item',
          purchased: true,
          edit: false
        },
        {
          name: 'not purchased item',
          purchased: false,
          edit: false
        }
      ],
    }
  },
  computed: {
    isDisabled() {
      return this.newItem.length === 0 || this.newItem.length > 20
    }
  },
  methods: {
    addItem: function() {
      if (this.newItem.length !== 0 && this.newItem.length <= 20) {
        this.list.push({
          name: this.newItem,
          purchased: false,
          edit: false
        });
        this.newItem = '';
      }
    },
    editItem: function(item) {
      // todo: edit this item
    },
    togglePurchased: function(item) {
      item.purchased = !item.purchased;
    },
    removeItem: function(item) {
      this.list.splice(this.list.indexOf(item), 1);
    }
  },
}
</script>

<style>
.v-btn {
  margin: 0 !important;
}
input {
  background-color: transparent;
  border: 0;
}
button {
  border: 0;
}
.purchased {
  text-decoration: line-through;
}
</style>
