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
                                <h4>User Profile</h4>
                                <div class="field initals">
                                    <div>{{user_initials}}</div>
                                </div>
                                <h4>Personal Details</h4>
                                <div class="field">
                                    <p>First Name:</p>
                                    <input v-model="form.first_name" type="text" :disabled="!edit_details">
                                </div>
                                <div class="field">
                                    <p>Middle Name:</p>
                                    <input v-model="form.middle_name" type="text" :disabled="!edit_details">
                                </div>
                                <div class="field">
                                    <p>Last Name:</p>
                                    <input v-model="form.last_name" type="text" :disabled="!edit_details">
                                </div>
                                <div class="field">
                                    <p>Address:</p>
                                    <input v-model="form.address" type="text" :disabled="!edit_details">
                                </div>
                                <div class="field">
                                    <p>Contact:</p>
                                    <input v-model="form.contact_number" type="text" :disabled="!edit_details">
                                </div>
                            </div>
                            <div class="form_con 2">
                                <h4>Login Details</h4>
                                <div class="field">
                                    <p>Email:</p>
                                    <input v-model="form.email" type="email" :disabled="!edit_details">
                                </div>
                                <div class="field" v-if="edit_details">
                                    <p>New Password:</p>
                                    <input v-model="form.new_password" type="password" :disabled="!edit_details">
                                </div>
                                <div class="field" v-if="edit_details">
                                    <p>Confirm Password:</p>
                                    <input v-model="form.confirm_password" type="password" :disabled="!edit_details">
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
import { mapGetters } from 'vuex'
export default {
    components:{
        Calendar,
        DatePicker
    },
    data(){
        return{
            edit_details: false,
            date : null,
            form: {
                first_name: '',
                middle_name: '',
                last_name: '',
                address: '',
                contact_number: '',
                email: '',
                new_password: '',
                confirm_password: '',
            }
        }
    },
    computed: {
        ...mapGetters({
            user: 'auth/user'
        }),
        user_initials() {
            if (this.user){
                const fn_initial = this.user.first_name.charAt(0);
                const ln_inital = this.user.last_name.charAt(0);
                return fn_initial + ln_inital;
            }
            return ''
        }
    },
    watch: {
        edit_details(edit) {
            if (!edit)
                this.setForm();
        }
    },
    created(){
        this.setForm();
    },
    methods: {
        setForm(){
            this.form.first_name = this.user.first_name;
            this.form.middle_name = this.user.middle_name;
            this.form.last_name = this.user.last_name;
            this.form.address = this.user.address;
            this.form.contact_number = this.user.contact_number;
            this.form.email = this.user.email;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>