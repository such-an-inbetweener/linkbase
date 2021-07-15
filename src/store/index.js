import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        baseURL: 'http://linker-api-deploy.herokuapp.com/api/',
        userFrame: {
            userName: "",
            userCategories: [],
            userOneCategoryList: [],
            isLinks: null,
            currentId: localStorage.getItem("currentId")
        },
        userToken: localStorage.getItem("token")
    },
    actions: {
        async getUserCategories(ctx) {

            try {
                const user = await axios.get(`${this.getters.baseURL}user/`, {
                    headers: {
                        Authorization: "Bearer " + this.getters.userToken,
                    },
                });
                const userCategories = user.data.data.categories.map(
                    (item) => {
                        return item;
                    }
                );
                ctx.commit('updateCategories', userCategories)
            } catch (error) {
                console.log(error.data.data.code)
            }

        },

        async getUserName(ctx) {
            try {
                const user = await axios.get(`${this.getters.baseURL}user/`, {
                    headers: {
                        Authorization: "Bearer " + this.getters.userToken,
                    },
                });
                console.log("get username: " + user.data.data.username)
                const userName = user.data.data.username;
                ctx.commit('updateUserName', userName)
            } catch (error) {
                console.log(error.data.data.code)
            }
        },
        async getUserOneCategoryList(ctx, category) {
            try {
                const currentId = category._id;
                localStorage.setItem("currentId", category._id)
                const user = await axios.get(`${this.getters.baseURL}category/${currentId}`, {
                    headers: {
                        Authorization: "Bearer " + this.getters.userToken,
                    },
                });
                let userOneCategoryList = null;
                if (user.data.data.links.length != 0) {
                    userOneCategoryList = user.data.data.links;
                    this.state.isLinks = true;
                }
                else if (user.data.data.links.length == 0) {
                    userOneCategoryList = "Have no links";
                    this.state.isLinks = false;
                }
                ctx.commit('updateUserOneCategoryList', userOneCategoryList)
            } catch (error) {
                console.log(error.data.data.code)
            }
        },
        async createCategory(ctx, newShelf) {
            try {
                const data = {
                    title: newShelf.categoryTitle,
                };
                await axios.post(
                    `${this.$store.getters.baseURL}category/`,
                    data,
                    {
                        headers: {
                            Authorization: "Bearer " + this.$store.getters.userToken,
                        },
                    }
                );
                const userCategoriesList = await axios.get(`${this.getters.baseURL}user/`, {
                    headers: {
                        Authorization: "Bearer " + this.getters.userToken,
                    },
                });
                const userCategories = userCategoriesList.data.data.categories.map(
                    (item) => {
                        return item;
                    }
                );
                ctx.commit('updateCategories', userCategories)
            } catch (error) {
                console.log(error.response.data.code);
            }

            this.newShelf.isNewShelf = !this.newShelf.isNewShelf;
        },
    },
    mutations: {
        updateCategories(state, userCategories) {
            state.userFrame.userCategories = userCategories;
        },
        updateUserName(state, userName) {
            state.userFrame.userName = userName;
        },
        updateCurrentId(state, currentId) {
            console.log(currentId + " from mutation")
            state.userFrame.currentId = currentId;
            console.log(state.userFrame.currentId + " after setting")
        },
        updateUserOneCategoryList(state, userOneCategoryList) {
            state.userFrame.userOneCategoryList = userOneCategoryList;
        },
    },
    getters: {
        baseURL(state) {
            return state.baseURL;
        },
        userToken(state) {
            return state.userToken;
        },
        userCategories(state) {
            return state.userFrame.userCategories;
        },
        userName(state) {
            return state.userFrame.userName;
        },
        userOneCategoryList(state) {
            return state.userFrame.userOneCategoryList;
        },
        activeCategoryId(state) {
            console.log(state.userFrame.currentId)
            return state.userFrame.currentId;
        }
    },
})