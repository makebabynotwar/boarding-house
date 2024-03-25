<<template>
    <div class="reservation_area">

        <div class="wrapper">

            <div class="reservation_con">
                <h1>Reservation</h1>
                <div class="main_body">

                    <div class="default_container">
                        <div class="custom_datatable">
                            <table class="">
                                <colgroup>
                                    <col width="12.5%"><col width="12.5%"><col width="12.5%"><col width="12.5%"><col width="12.5%">
                                    <col width="12.5%"><col width="12.5%"><col width="12.5%">
                                </colgroup>
                                    <thead>
                                        <tr>
                                            <th ><span>Room No.</span></th>
                                            <th ><span>Room Type</span></th>
                                            <th ><span>Capacity</span></th>
                                            <th ><span>Monthly Fee</span></th>
                                            <th ><span>Status</span></th>
                                            <th ><span>Start Date</span></th>
                                            <th ><span>End Date</span></th>
                                            <th ><span>Total Months</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="reservation in reservations">
                                            <td ><span>{{reservation.room_details.room_number}}</span></td>
                                            <td ><span>{{reservation.room_details.type}}</span></td>
                                            <td ><span>{{reservation.room_details.capacity}}</span></td>
                                            <td ><span>{{reservation.room_details.monthly_fee}}</span></td>
                                            <td ><span>{{reservation.status}}</span></td>
                                            <td ><span>{{reservation.start_date}}</span></td>
                                            <td ><span>{{reservation.end_date}}</span></td>
                                            <td ><span>{{reservation.total_months}}</span></td>
                                        </tr>
                                    </tbody>
                            </table>
                        </div>

                    </div>

                </div>

            </div>

        </div>
        <div class="calendar_con" v-if="reserve_popup">
            <a href="javascript:;" class="calendar_close" @click="reserve_popup = false">
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="white"/>
                        <path d="M7 17L16.8995 7.10051" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
            <div class="calendar_picker">
                <h4>Change schedule</h4>
                <DatePicker v-model.range="range" mode="dateTime" :min-date="new Date()"/>
                <div class="calendar_btn">
                    <button @click="reserve_popup = false">Cancel</button>
                    <button>Proceed</button>
                </div>
            </div>
        </div>
        <DeleteModal v-if="delete_modal" @close="delete_modal = false"/>
    </div>
</template>


<script>
import Maintenance from '@/components/Modal/RequestMaintenance';
import DeleteModal from '@/components/Modal/DeleteModal';
import { Calendar,DatePicker } from 'v-calendar';
import { format } from 'date-fns';
import axios from 'axios'
export default {
    components:{
        Maintenance,
        Calendar,
        DatePicker,
        DeleteModal,
    },
    data(){
        return{
            edit_details: false,
            date : null,
            maintenance : false,
            reserve_popup : false,
            delete_modal : false,
            reservations: [],
        }
    },
    created() {
        this.myReservations();
    },
    methods: {
        myReservations() {
            axios.get('my-reservations')
            .then(res=>{
                this.reservations = res.data.my_reservations ?? [];
            })
            .catch(err=>{
                console.log(err);
            })
        },
        formatDate(date){
            return format(date, 'MMM dd, yyyy');
        },
    }
}
</script>

<style lang="scss" scoped>

</style>