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
                                <button v-if="!edit_details" type="button" @click="edit_details = true">Edit</button>
                                    <div v-else="edit_details" class="button_box">
                                    <button type="button" @click="edit_details = false">Cancel</button>
                                    <button @click="updateUserInfo" type="button">Save</button>
                                </div>
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
                                <button v-if="!edit_password" type="button" @click="edit_password = true">Edit</button>
                            <div v-else="edit_password" class="button_box">
                                <button type="button" @click="edit_password = false">Cancel</button>
                                <button @click="updatePassword" type="button">Save</button>
                            </div>
                                <div class="field">
                                    <p>Email:</p>
                                    <input v-model="user.email" type="email" :disabled="true">
                                </div>
                                <div class="field" v-if="edit_password">
                                    <p>Current Password:</p>
                                    <input v-model="password_form.current_password" autocomplete="off" type="password" :disabled="!edit_password">
                                </div>
                                <div class="field" v-if="edit_password">
                                    <p>New Password:</p>
                                    <input v-model="password_form.new_password" autocomplete="off" type="password" :disabled="!edit_password">
                                </div>
                                <div class="field" v-if="edit_password">
                                    <p>Confirm Password:</p>
                                    <input v-model="password_form.confirm_password" autocomplete="off" type="password" :disabled="!edit_password">
                                </div>
                            </div>
                        </form>
                        
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
import axios from 'axios'
export default {
    components:{
        Calendar,
        DatePicker
    },
    data(){
        return{
            edit_details: false,
            edit_password: false,
            date : null,
            form: {
                first_name: '',
                middle_name: '',
                last_name: '',
                address: '',
                contact_number: '',
            },
            password_form: {
                current_password: '',
                new_password: '',
                confirm_password: '',
            },
            reference: {},
            red_flags: {
                new_password: false,
            }
        }
    },
    computed: {
        ...mapGetters({
            user: 'auth/user'
        }),
        user_initials() {
            if (this.user){
                const fn_initial = this.form.first_name.charAt(0);
                const ln_inital = this.form.last_name.charAt(0);
                return fn_initial + ln_inital;
            }
            return ''
        }
    },
    watch: {
        edit_details(edit) {
            // if (!edit)
            //     this.setForm();
        },
        'form.new_password'() {
            this.checkRedFlag('new_password')
        },
        'form.confirm_password'() {
            this.checkRedFlag('new_password')
        },
    },
    created(){
        this.setForm();
    },
    methods: {
        setForm(){
            this.form.first_name = this.user.first_name;
            this.form.middle_name = this.user.middle_name ?? '';
            this.form.last_name = this.user.last_name;
            this.form.address = this.user.address ?? '';
            this.form.contact_number = this.user.contact_number ?? '';
            
            this.reference = JSON.parse(JSON.stringify(this.form));
            this.reference.new_password = '';
            this.reference.confirm_password = '';
        },
        updateUserInfo() {
            let no_changes = true;
            for (let [key, value] of Object.entries(this.form)){
                if (this.reference[key] != value)
                    no_changes = false;
            }
            if (!no_changes) {
                const form_data = new FormData();
                for (const [key, value] of Object.entries(this.form)) {
                    if (value) {
                        form_data.append(key, value);
                    }
                }
                axios.post(`user/profile-update/${this.user.id}`, form_data)
                .then(res=>{
                    const new_profile = res.data.data;
                    const arr_params = ['first_name', 'middle_name', 'last_name', 'address', 'contact_number']
                    for (const [key, value] of Object.entries(new_profile)) {
                        if (arr_params.includes(key)) {
                            this.form[key] = value;
                        }
                    }
                    this.edit_details = false;
                })
            }
        },
        checkRedFlag(flag) {
            if (this.password_form.current_password == '' 
                || this.password_form.new_password == '' 
                || this.password_form.confirm_password == ''
               ) {
                this.red_flags[flag] = true;
                return;
            }
            this.red_flags[flag] = (this.password_form.new_password != this.password_form.confirm_password);
        },
        updatePassword(){
            axios.post(`user/change-password/${this.user.id}`, this.password_form)
            .then(res=>{
                alert('Successfully updated the password!')
            })
            .catch(err=>{
                alert(`${err.response.data.message}`)
            })
            .finally(()=>{
                this.edit_password = false;
            })
        }

    }
}
</script>

<style lang="scss" scoped>

</style>