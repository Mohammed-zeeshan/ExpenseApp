const Tracker = require('../models/tracker')

exports.getexpense=(req,res,next)=>{
    res.render('expenses')
}

//inserting into the database
exports.postexpense=(req,res,next)=>{
    const expenses={
        amount:req.body.amount,
        description:req.body.description,
        category:req.body.category
    }
    Tracker.create(expenses).then((exp)=>{
        console.log("inserted succesfully");
        res.redirect('/addexpense')
    }).catch(err=>{
        console.log(err);
    })
}

//getting into page
exports.getpostexpense=(req,res,next)=>{
    Tracker.findAll().then((expenses)=>{
        console.log(expenses);
        const viewdata={
            pagetitle:'home-page',
            expenses
        }
        res.render('get-expense',viewdata)
    }).then(err=>{
        console.log(err);
    })

}

//deleting the expense

exports.deleteexpense=(req,res,next)=>{
    const expenseId=req.body.expenseId
    Tracker.destroy({where:{id:expenseId}})
    .then(()=>{
        console.log("DELTED");
        res.redirect('/addexpense')
    }).catch(err=>{
        console.log(err);
    })

}

//editing the product
exports.geteditexpense=(req,res,next)=>{
    const expenseId=req.params.id
    Tracker.findByPk(expenseId)
    .then((expense)=>{
        const viewsdata={
            pagetitle:'EDIT-EXPENSE',
            expense
        }
        res.render('edit-expense',viewsdata)
    })
}

//edit-expenses
exports.editexpense=(req,res,next)=>{
    const expenseId=req.body.expenseId
    const editexpense={
        amount:req.body.amount,
        description:req.body.description,
        category:req.body.category
    }
    Tracker.update(editexpense,{where:{id:expenseId}})
    .then(()=>{
        res.redirect('/addexpense')
        console.log("edit-done");
    }).catch(err=>{
        console.log(err);
    })


}