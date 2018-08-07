<template>
    <div class="article_container">
        <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem >文章管理</BreadcrumbItem>
        </Breadcrumb>
        <div class="kbis article_content">
            <Button type="primary" icon="plus-round" @click="modal1 = true">添加文章</Button>
            <!-- 添加文章的模态框  start-->
            <Modal
                v-model="modal1"
                title="添加文章"
                @on-ok="addArticle">
                <Form :model="formInfo" label-position="left" :label-width="100">
                    <FormItem label="文章名称">
                        <Input v-model="formInfo.name"></Input>
                    </FormItem>
                    <FormItem label="作者">
                        <Input v-model="formInfo.author"></Input>
                    </FormItem>
                    <FormItem label="出版日期">
                        <Input v-model="formInfo.publicationDate"></Input>
                    </FormItem>
                </Form>
            </Modal>
            <!-- 添加文章的模态框结束end -->
             <!-- 删除文章的模态框 -->
            <Modal v-model="modal2" width="360">
                <p slot="header" style="color:#f60;text-align:center">
                    <Icon type="information-circled"></Icon>
                    <span>删除确认</span>
                </p>
                <div style="text-align:center">
                    <p>删除此文章后，将不能回复.</p>
                    <p>是否继续删除？</p>
                </div>
                <div slot="footer">
                    <Button type="error" size="large" long :loading="modal_loading" @click="del">确认删除</Button>
                </div>
            </Modal>
            <!-- 删除模态框终止 -->
            <!-- 编辑文章 start-->
            <Modal
                v-model="modal3"
                title="编辑文章"
                @on-ok="confirmEditArticle">
                <Form :model="data1[editIndex]" label-position="left" :label-width="100">
                    <FormItem label="Title">
                        <Input v-model="data1[editIndex].name"></Input>
                    </FormItem>
                    <FormItem label="Title name">
                        <Input v-model="data1[editIndex].author"></Input>
                    </FormItem>
                    <FormItem label="Aligned title">
                        <Input v-model="data1[editIndex].publicationDate"></Input>
                    </FormItem>
                </Form>
            </Modal>
            <!-- 编辑文章end -->
            <Table border :columns="columns1" size="large" :data="data1" class="article_table"></Table>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Article',
        data() {
            return {
                columns1: [
                    {
                        title: '文章名称',
                        key: 'name',
                        align: 'center'
                    },
                    {
                        title: '作者',
                        key: 'author',
                        align: 'center'
                    },
                    {
                        title: '出版日期',
                        key: 'publicationDate',
                        align: 'center'
                    },
                    {
                        title: '操作',
                        key: 'operation',
                        render: (h, params) => {
                               return h('div',[
                                   h('Button', {
                                       props: {
                                           type: 'success'
                                       },
                                       style: {
                                           marginRight: '20px'
                                       },
                                       on: {
                                           click: () => {
                                               this.editArticle(params.index);
                                           }
                                       }
                                   }, '编辑文章'),
                                   h('Button', {
                                       props: {
                                           type: 'error'
                                       },
                                       on: {
                                           click: () => {
                                               this.modal2 = true;
                                               this.deleteArticle(params.index);
                                           }
                                       }
                                   }, '删除文章')
                               ]);
                        },
                        align: 'center'
                    }
                ],
                data1: [
                    {
                        name: '《平凡的世界》',
                        author: '路遥',
                        publicationDate: '1994-05-20'
                    },
                    {
                        name: '《人生》',
                        author: '余华',
                        publicationDate: '1996-06-06'
                    },
                    {
                        name: '《谁的青春不迷茫》',
                        author: '刘同',
                        publicationDate: '2013-06-13'
                    },
                    {
                        name: '《你的孤独，虽败犹荣》',
                        author: '刘同',
                        publicationDate: '2011-05-12'
                    },
                    {
                        name: '《边城》',
                        author: '沈从文',
                        publicationDate: '2006-13-12'
                    }
                ],
                modal1: false,
                modal2: false,
                modal3: false,
                modal_loading: false,
                deleteIndex: '',
                // 编辑文章
                editIndex : 0,
                // 添加文章
                formInfo: {
                    name: '',
                    author: '',
                    publicationDate: ''
                }
            }
        },
        methods: {
            // 编辑文章
            editArticle(index) {
                this.modal3 = true;
                this.editIndex = index;
            },
            // 确定编辑文章
            confirmEditArticle() {
                this.$Message.config({
                    top:120
                });
                this.$Message.success('添加成功');
            },
            // 发送删除Index
            deleteArticle(index) {
                this.deleteIndex = index;
            },
            // 模态框确认删除
            del() {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.data1.splice(this.deleteIndex, 1);
                }, 500);
            },
            // 添加文章的模态框
            addArticle() {
                this.$Message.config({
                    top:120
                });
                if (this.formInfo.name.trim() && this.formInfo.author.trim() && this.formInfo.publicationDate.trim()) {
                    let obj = {
                        name: this.formInfo.name,
                        author: this.formInfo.author,
                        publicationDate: this.formInfo.publicationDate
                    }
                    this.data1.push(obj);
                    this.formInfo.name = this.formInfo.author = this.formInfo.publicationDate = "";
                    this.$Message.success('添加成功');
                } else {
                    this.$Message.error('添加失败，添加内容不能为空。');
                    this.formInfo.name = this.formInfo.author = this.formInfo.publicationDate = "";
                }
            }
        }
    }
</script>
<style scoped lang="less">
.article_container {
    .ivu-breadcrumb {
        text-align: left;
    }
    .article_content {
        text-align: left;
        padding: 10px;
        background-color: #fff;
        .article_table {
            margin-top: 20px;
        }
    }
}

</style>
