<template>
    <div class="vehicle-statistics">
        <h2>车辆统计</h2>
        <!-- 页面内容 -->
        <div class="company-stats">
            <h3>统计信息</h3>
            <table>
                <thead>
                    <tr>
                        <th>公司名称</th>
                        <th>车辆总数</th>
                        <th>监控车辆数</th>
                        <th>监控车辆占比</th>
                        <th>出车总数</th>
                        <th>出车总数占比</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="company in companies" :key="company.id">
                        <td>{{ company.name }}</td>
                        <td>{{ company.totalVehicles }}</td>
                        <td>{{ company.monitoringVehicles }}</td>
                        <td>{{ company.monitoringVehicleRatio }}</td>
                        <td>{{ company.totalTrips }}</td>
                        <td>{{ company.tripRatio }}</td>
                        <td>
                            <button @click="analyzeData(company.id)">数据分析</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- 数据分析弹窗 -->
            <div v-if="showAnalysisModal" class="analysis-modal">
                <h4>数据分析</h4>
                <div>
                    <p><strong>公司名称:</strong> {{ selectedCompany.name }}</p>
                    <p><strong>车辆总数:</strong> {{ selectedCompany.totalVehicles }}</p>
                    <p><strong>监控车辆数:</strong> {{ selectedCompany.monitoringVehicles }}</p>
                    <p><strong>监控车辆占比:</strong> {{ selectedCompany.monitoringVehicleRatio }}</p>
                    <p><strong>出车总数:</strong> {{ selectedCompany.totalTrips }}</p>
                    <p><strong>出车总数占比:</strong> {{ selectedCompany.tripRatio }}</p>
                </div>
                <button @click="closeAnalysisModal">关闭</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            companies: [
                {
                    id: 1,
                    name: '公司 A',
                    totalVehicles: 100,
                    monitoringVehicles: 80,
                    monitoringVehicleRatio: '80%',
                    totalTrips: 500,
                    tripRatio: '50%'
                },
                {
                    id: 2,
                    name: '公司 B',
                    totalVehicles: 150,
                    monitoringVehicles: 120,
                    monitoringVehicleRatio: '80%',
                    totalTrips: 800,
                    tripRatio: '60%'
                },
                {
                    id: 3,
                    name: '公司 C',
                    totalVehicles: 200,
                    monitoringVehicles: 160,
                    monitoringVehicleRatio: '80%',
                    totalTrips: 1000,
                    tripRatio: '70%'
                },
                {
                    id: 4,
                    name: '公司 D',
                    totalVehicles: 120,
                    monitoringVehicles: 100,
                    monitoringVehicleRatio: '80%',
                    totalTrips: 600,
                    tripRatio: '55%'
                },
                {
                    id: 5,
                    name: '公司 E',
                    totalVehicles: 180,
                    monitoringVehicles: 150,
                    monitoringVehicleRatio: '80%',
                    totalTrips: 900,
                    tripRatio: '65%'
                },
                {
                    id: 6,
                    name: '公司 F',
                    totalVehicles: 130,
                    monitoringVehicles: 110,
                    monitoringVehicleRatio: '80%',
                    totalTrips: 700,
                    tripRatio: '58%'
                },
                {
                    id: 7,
                    name: '公司 G',
                    totalVehicles: 160,
                    monitoringVehicles: 130,
                    monitoringVehicleRatio: '80%',
                    totalTrips: 850,
                    tripRatio: '63%'
                },
                {
                    id: 8,
                    name: '公司 H',
                    totalVehicles: 140,
                    monitoringVehicles: 120,
                    monitoringVehicleRatio: '80%',
                    totalTrips: 750,
                    tripRatio: '60%'
                },
                {
                    id: 9,
                    name: '公司 I',
                    totalVehicles: 110,
                    monitoringVehicles: 90,
                    monitoringVehicleRatio: '80%',
                    totalTrips: 550,
                    tripRatio: '53%'
                },
                {
                    id: 10,
                    name: '公司 J',
                    totalVehicles: 190,
                    monitoringVehicles: 160,
                    monitoringVehicleRatio: '80%',
                    totalTrips: 950,
                    tripRatio: '68%'
                }
            ],
            showAnalysisModal: false,
            selectedCompany: null
        };
    },
    methods: {
        analyzeData(companyId) {
            // 根据公司 ID 获取选中的公司信息
            this.selectedCompany = this.companies.find((company) => company.id === companyId);
            // 显示弹窗
            this.showAnalysisModal = true;
        },
        closeAnalysisModal() {
            this.showAnalysisModal = false;
        }
    }
};
</script>

<style src="@/assets/css/company-stats.css" scoped></style>
  