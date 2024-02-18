<<template>
    <div class="main_area">
        <div class="wrapper">
            <div class="main_con">
                <div class="search_con">
                    <div class="search_box">
                        <input class="search_input" type="text" placeholder="Search place or boarding house"/>
                        <button class="search_button">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11V11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#bababa"></path></svg>
                        </button>
                    </div>
                    <div class="filter_con">
                        <div class="price_range_con">
                            <h4>Price Range</h4>
                            <div class="price_range prices">
                                <button type="button" @click="toggleDropdown('price_dropdown')">{{selected_price.name}}</button>
                                <ul class="dropdown" v-if="price_dropdown">
                                    <li 
                                        :class="{ active: selected_price.name == price.name }" 
                                        v-for="price in prices"
                                        @click="selectFilter('price_dropdown', price)"
                                    >
                                        {{price.name}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="price_range_con">
                            <h4>Room Capacity</h4>
                            <div class="price_range">
                                <button type="button" @click="toggleDropdown('capacity_dropdown')">{{selected_capacity}}</button>
                                <ul class="dropdown" v-if="capacity_dropdown">
                                    <li 
                                        :class="{ active: selected_capacity  == capacity }" 
                                        v-for="capacity in capacities"
                                        @click="selectFilter('capacity_dropdown', capacity)"
                                    >
                                        {{capacity}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="price_range_con">
                            <h4>Room Type</h4>
                            <div class="price_range">
                                <button type="button" @click="toggleDropdown('room_type_dropdown')">{{selected_type}}</button>
                                <ul class="dropdown" v-if="room_type_dropdown">
                                    <li 
                                        :class="{ active: selected_type  == type }" 
                                        v-for="type in room_types"
                                        @click="selectFilter('room_type_dropdown', type)"
                                    >
                                        {{type}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="room_boxes">
                    <div class="room_box" v-for="room in rooms">
                        <img src="https://a0.muscache.com/im/pictures/53efff39-8ad1-4a94-b678-a9f614eaed0a.jpg?im_w=720"/>
                        <div class="room_details">
                            <h2>{{ room.room_name }} <span>- {{room.type}}</span></h2>
                            <!-- <p class="room_address"> {{ room.address }}</p> -->
                            <div class="room_cont">
                               <div class="flex_box">
                                    <p class="room_capacity">Good for {{ room.capacity }}</p> 
                                    <p class="room_electric">{{room.amenities.Electricity ? 'Free' : ''}}</p>
                                    <p class="room_water">{{room.amenities.Water ? 'Free' : ''}}</p>
                                    <p>{{room.amenities}}</p>
                               </div>
                                <p class="room_price"><span>₱{{room.monthly_fee}}</span> / month</p>     
                            </div>
                            <div class="room_rating">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; height: 12px; width: 12px; fill: currentcolor;" aria-hidden="true" role="presentation" focusable="false"><path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>
                                <span>{{ room.rate }}</span>
                            </div>
                            <button class="reservation" type="button" @click="reserveBtn()">Reservation</button>
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
                <h4>Pick your date for reservation</h4>
                <DatePicker v-model.range="range" mode="dateTime" :min-date="new Date()"/>
                <div class="calendar_btn">
                    <button @click="reserve_popup = false">Cancel</button>
                    <button>Proceed</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Calendar,DatePicker } from 'v-calendar';
import axios from 'axios'
export default {
    components: {
        Calendar,
        DatePicker
    },
    data(){
        return{
            rooms:[],
            price_dropdown : false,
            capacity_dropdown : false,
            room_type_dropdown : false,
            reserve_popup : false,
            selected_price: null,
            selected_capacity: null,
            selected_type: null,
            capacities: [1, 2, 3, 4],
            room_types: ['single', 'double', 'suite'],
            prices: [
                {
                    name: '5000 and above',
                    min: 5000,
                    max: null,
                },
                {
                    name: '4000 - 5000',
                    min: 4000,
                    max: 5000,
                },
                {
                    name: '1500 - 4000',
                    min: 1500,
                    max: 4000,
                },
                {
                    name: '1500 and below',
                    min: 0,
                    max: 1500,
                },
            ],

        }
    },
    created() {
        this.selected_price = this.prices[0];
        this.selected_capacity = this.capacities[0];
        this.selected_type = this.room_types[0];
        axios.get('/rooms/get')
        .then(res=>{
            console.log(res.data)
            this.rooms = res.data
        })
    },
    methods:{
        reserveBtn(){
            this.reserve_popup = true;
        },
        toggleDropdown(selected_dropdown) {
            const dropdowns = ['price_dropdown', 'capacity_dropdown', 'room_type_dropdown'];
            if (this[selected_dropdown]) {
                this[selected_dropdown] = false;
                return;
            }
            dropdowns.forEach(dropdown=>{
                this[dropdown] = (dropdown == selected_dropdown)
            })
        },
        selectFilter(dropdown, value) {
            this[dropdown] = false;
            if (dropdown == 'price_dropdown')
                this.selected_price = value;
            else if (dropdown == 'capacity_dropdown')
                this.selected_capacity = value;
            else if (dropdown == 'room_type_dropdown')
                this.selected_type = value;
        }
    }

}
</script>

<style lang="scss" scoped>

</style>