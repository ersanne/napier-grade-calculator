import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        moduleId: 0,
        modules: [],
    },
    getters: {
        getCurrentDegreeAverage: state => {
            let level9ModuleMarks = [0, 0, 0]; //Current Min, Mid, Max
            let total = 0;
            let count = 0;

            state.modules.forEach(elem => {
                if (elem.level === '9' && elem.mark > level9ModuleMarks[0]) {
                    if (elem.mark > level9ModuleMarks[2]) {
                        level9ModuleMarks[2] = elem.mark
                    } else if (elem.mark > level9ModuleMarks[1]) {
                        level9ModuleMarks[1] = elem.mark
                    } else {
                        level9ModuleMarks[0] = elem.mark
                    }
                } else if (elem.level === '10') {
                    total += elem.mark;
                    count++
                }
            });

            level9ModuleMarks.forEach(elem => {
                if (elem !== 0) {
                    total += elem;
                    count++
                }
            });
            if(count != 0) return  total / count
            return 'N/A'
        },
        getOverallAverage: state => {
            let total = 0;
            let count = 0;

            state.modules.forEach(elem => {
                total += elem.mark;
                count++;
            });
            console.log(total)
            if(count !== 0) return  total / count
            return 'N/A'
        },
        getAverageByLevel: state => (level) => {
            let total = 0;
            let count = 0;
            console.log(level)
            state.modules.forEach(elem => {
                console.log(elem)
                if (elem.level === level) {
                    total += elem.mark;
                    count++;
                }
            });
            if(count !== 0) return  total / count
            return 'N/A'
        },
        getLevels: state => {
            let levels = new Set()
            state.modules.forEach(elem => {
                levels.add(elem.level)
            })
            return Array.from(levels).sort().reverse()
        }
    },
    mutations: {
        updateOrAddModule(state, module) {
            const idx = state.modules.findIndex(elem => elem.id === module.id);
            if (idx === -1) {
                module.id = state.moduleId++;
                state.modules.push(module);
                state.moduleId = state.moduleId++
            } else {
                Vue.set(state.modules, idx, module)
            }
        },
        deleteModule(state, module) {
            const idx = state.modules.findIndex(elem => elem.id === module.id)
            Vue.delete(state.modules, idx)
        }
    },
    actions: {
        updateOrAddModule({commit}, module) {
            commit('updateOrAddModule', module)
        },
        deleteModule({commit}, module) {
            commit('deleteModule', module)
        }
    },
    modules: {}
    ,
    plugins: [
        vuexLocal.plugin
    ]
})
