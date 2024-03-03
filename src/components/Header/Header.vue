<<template>
    <div class="header">
        <div class="wrapper">
            <div class="header_con">
                <div class="head_info">
                    <div class="header_info">
                        <button class="header_profile" :class="{active : dropdown}" @click="dropdown = !dropdown">
                            <figure>
                                <img src="../../assets/icon_profile.png" alt="User"/>
                            </figure>
                            <span>User</span>
                        </button>
                        <div class="dropdown" v-if="dropdown">
                            <ul>
                                <li><router-link to="user-profile">User Profile</router-link></li>
                                <li><a href="javascript:;" @click="logout">Logout</a></li>

                            </ul>
                        </div>
                    </div>

                </div>

                <div class="burder_icon" @click="$emit('open')">
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                    <path d="M5 17H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                    <path d="M5 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default{
    data(){
        return{
            dropdown : false,
        }
    },
    methods: {
        ...mapActions({
            logout : 'auth/logout'
        })
    }
}

</script>

<style lang="scss" scoped>

</style>