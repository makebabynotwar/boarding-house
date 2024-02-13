<<template>
    <div class="sliding_modal">
        <div class="slide_header default">
            <h3>Edit Tenants</h3> 
            <a href="javascript:;" class="slider_close" @click="$emit('close')">
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="white"/>
                        <path d="M7 17L16.8995 7.10051" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>

        <div class="slide_body default">
            <div class="slide_container">
                <form>
                    <div class="field">
                        <label class="custom_label">Tenant Info:</label>
                        <p>
                            <span><strong>Name:</strong> Dr.Strange </span>
                            <span><strong>Contact:</strong>  0234-442-212</span>
                            <span><strong>Email:</strong> c@gmail.com</span>
                        </p>
                    </div>
                    <div class="field">
                        <label class="custom_label">Room no: <button type="button" class="num_drop" :class="{'active': active_dropdown}" @click="active_dropdown = !active_dropdown"> 4 </button></label> 
                        <div class="admin_dropdown" v-if="active_dropdown">
                            <p>Available Rooms</p>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>6</li>
                            </ul>
                        </div>
                    </div>

                    <div class="field">
                        <label class="custom_label">Monthly Payment</label>
                        <p>
                            P 5000
                        </p>
                    </div>
                </form>
            </div>
        </div>

        <div class="buttons industry">
            <button type="button" class="btn small border_grey">Cancel</button> 
            <button type="submit" class="btn small orange">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active_dropdown : false,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>