<<template>
    <div class="user_area">
        <div class="wrapper">
            <div class="user_con">
                <div class="user_info">
                    <div class="user_heading">
                        <h1>Personal info</h1>
                    </div>
                    <div class="user_form">
                        <form>
                            <div class="form_con 1">
                                <h4>Personal Details</h4>
                                <div class="field">
                                    <p>First Name:</p>
                                    <input type="text" :disabled="!edit_details">
                                </div>
                                <div class="field">
                                    <p>Last Name:</p>
                                    <input type="text" :disabled="!edit_details">
                                </div>
                                <div class="field">
                                    <p>Address:</p>
                                    <input type="text" :disabled="!edit_details">
                                </div>
                                <div class="field">
                                    <p>Emergency Contact:</p>
                                    <input type="text" :disabled="!edit_details">
                                </div>
                            </div>
                            <div class="form_con 2">
                                <h4>Login Details</h4>
                                <div class="field">
                                    <p>Email:</p>
                                    <input type="email" :disabled="!edit_details">
                                </div>
                                <div class="field">
                                    <p>Password:</p>
                                    <input type="password" :disabled="!edit_details">
                                </div>
                            </div>
                        </form>
                        <button v-if="!edit_details" type="button" @click="edit_details = true">Edit</button>
                        <div v-else="edit_details" class="button_box">
                            <button type="button" @click="edit_details = false">Cancel</button>
                            <button type="button">Save</button>
                        </div>
                    </div>
<!-- 
  <DatePicker v-model="date" /> -->
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { Calendar,DatePicker } from 'v-calendar';
export default {
    components:{
        Calendar,
        DatePicker
    },
    data(){
        return{
            edit_details: false,
            date : null,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>