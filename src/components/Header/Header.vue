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
                            </ul>
                        </div>
                    </div>

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