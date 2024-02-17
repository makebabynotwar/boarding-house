<<template>
    <div class="sliding_modal add_room">
        <div class="slide_header default">
            <h3>Request Maintenance</h3> 
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
                        <label class="custom_label">Request:</label>
                        <textarea name="message" placeholder="Enter your request here ..." class="" style="height: 120px;"></textarea>
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