<template>
    <div class="vehicle-statistics">
        <h2>车辆管理</h2>
        <!-- 页面内容 -->
        <div class="vehicle-monitor">
            <div class="table-toolbar">
                <button class="add-button" @click="openAddModal">新增</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>车辆编号</th>
                        <th>车辆名称</th>
                        <th>车辆类型</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="vehicle in vehicles" :key="vehicle.id">
                        <td>{{ vehicle.id }}</td>
                        <td>{{ vehicle.name }}</td>
                        <td>{{ vehicle.type }}</td>
                        <td>
                            <button class="edit-button" @click="editVehicle(vehicle)">编辑</button>
                            <span class="button-separator"></span>
                            <button class="delete-button" @click="confirmDelete(vehicle.id, vehicle.name)">删除</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- 编辑车辆信息的模态框 -->
            <div v-if="showEditModal" class="edit-modal">
                <h3>编辑车辆信息</h3>
                <form @submit.prevent="saveVehicle">
                    <div>
                        <label for="edit-id">车辆编号:</label>
                        <input type="text" id="edit-id" v-model="editVehicleData.id" readonly>
                    </div>
                    <div>
                        <label for="edit-name">车辆名称:</label>
                        <input type="text" id="edit-name" v-model="editVehicleData.name" required>
                    </div>
                    <div>
                        <label for="edit-type">车辆类型:</label>
                        <input type="text" id="edit-type" v-model="editVehicleData.type" required>
                    </div>
                    <button type="submit">保存</button>
                    <button @click="cancelEdit">取消</button>
                </form>
            </div>

            <!-- 新增车辆信息的模态框 -->
            <div v-if="showAddModal" class="add-modal">
                <h3>新增车辆信息</h3>
                <form @submit.prevent="saveNewVehicle">
                    <div class="form-group">
                        <label for="new-vehicle-id">车辆编号:</label>
                        <input type="text" id="new-vehicle-id" v-model="newVehicleData.id" required>
                    </div>
                    <div class="form-group">
                        <label for="new-vehicle-name">车辆名称:</label>
                        <input type="text" id="new-vehicle-name" v-model="newVehicleData.name" required>
                    </div>
                    <div class="form-group">
                        <label for="new-vehicle-type">车辆类型:</label>
                        <input type="text" id="new-vehicle-type" v-model="newVehicleData.type" required>
                    </div>
                    <button type="submit">保存</button>
                    <button type="button" @click="cancelAdd">取消</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            vehicles: [],
            showAddModal: false, // 控制新增模态框显示/隐藏
            newVehicleData: {    // 新增车辆信息的临时数据
                id: '',
                name: '',
                type: ''
            },
            showEditModal: false, // 控制编辑模态框显示/隐藏
            editVehicleData: {    // 编辑车辆信息的临时数据
                id: null,
                name: '',
                type: ''
            },
            originalVehicleData: {} // 用于存储编辑前的车辆信息数据
        };
    },
    mounted() {
        // 生成随机车辆信息数据
        for (let i = 1; i <= 10; i++) {
            const vehicle = {
                id: i,
                name: `车辆${i}`,
                type: `类型${i}`,
            };
            this.vehicles.push(vehicle);
        }
    },
    methods: {
        openAddModal() {
            // 打开新增模态框
            this.showAddModal = true;
        },
        cancelAdd() {
            // 取消新增
            this.showAddModal = false;
            this.resetNewVehicleData();
        },
        saveNewVehicle() {
            // 保存新增的车辆信息
            this.vehicles.push({ ...this.newVehicleData });

            // 重置新增车辆信息
            this.resetNewVehicleData();

            // 隐藏模态框
            this.showAddModal = false;
        },
        resetNewVehicleData() {
            // 重置新增车辆信息
            this.newVehicleData = {
                id: '',
                name: '',
                type: ''
            };
        },
        editVehicle(vehicle) {
            // 保存原始车辆信息的副本
            this.originalVehicleData = { ...vehicle };
            // 将编辑数据赋值给临时数据对象，用于编辑表单的回显
            this.editVehicleData = vehicle;
            // 显示编辑模态框
            this.showEditModal = true;
        },
        cancelEdit() {
            // 取消编辑，还原为原始车辆信息
            this.editVehicleData = { ...this.originalVehicleData };
            // 取消编辑，隐藏模态框
            this.showEditModal = false;
        },
        saveVehicle() {
            // 保存编辑的车辆信息
            // 在这里执行保存逻辑，例如向后端发送请求更新数据

            // 隐藏模态框
            this.showEditModal = false;
        },
        confirmDelete(id, name) {
            const confirmMessage = `是否删除 ${name}`;
            if (window.confirm(confirmMessage)) {
                this.deleteVehicle(id);
            }
        },
        deleteVehicle(id) {
            // 删除车辆信息的逻辑
            console.log(`删除车辆 ${id}`);
            // 执行删除操作
            this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
        },
    },
};
</script>

<style src="@/assets/css/vehicle-monitor.css" scoped></style>