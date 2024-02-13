<<template>
    <div class="sliding_modal add_room">
        <div class="slide_header default">
            <h3>Add Room</h3> 
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
                <form class="custom_form">
                    <div class="field">
                        <label class="custom_label">Room No:</label>
                        <input type="text" name="title" placeholder="Ex. 01" >
                    </div>
                    <div class="field">
                        <label class="custom_label">Monthly Payment</label>
                        <input type="text" name="title" placeholder="Ex. 1000/month" >
                    </div>
                    <div class="field">
                        <label class="custom_label">Capacity</label>
                        <input type="text" name="title" placeholder="Ex. per room" >
                    </div>
                    <div class="field add_room">
                        <label class="custom_label">Room Type</label>
                        <label class="custom_label"><button type="button" class="num_drop" :class="{'active': active_dropdown}" @click="active_dropdown = !active_dropdown"> Single </button></label> 
                        <div class="admin_dropdown" v-if="active_dropdown">
                            <ul>
                                <li>Single</li>
                                <li>Double</li>
                                <li>Suite</li>
                            </ul>
                        </div>
                    </div>
                    <div class="field">
                        <label class="custom_label">Please check applicable amenities</label>
                        <div class="checkbox_block">
                            <label class="custom_checkbox small red">
                                <input type="checkbox" name="products" value="1"> <em class="check_icon"></em> 
                                <span>TV</span>
                            </label>
                        </div>
                        <div class="checkbox_block">
                            <label class="custom_checkbox small red">
                                <input type="checkbox" name="products" value="2"> <em class="check_icon"></em> 
                                <span>Wifi</span>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="buttons industry">
            <button type="button" class="btn small border_grey" @click="$emit('close')">Cancel</button> 
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