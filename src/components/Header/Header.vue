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
                                <li><a href="">Logout</a></li>
                                <li><a href="">User Profile</a></li>

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
    export default{
        data(){
            return{
                dropdown : false,
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>